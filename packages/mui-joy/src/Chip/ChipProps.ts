import * as React from 'react';
import { OverridableStringUnion, OverrideProps } from '@mui/types';
import { ColorPaletteProp, SxProps, VariantProp, ApplyColorInversion } from '../styles/types';
import { CreateSlotsAndSlotProps, SlotProps } from '../utils/types';

export type ChipSlot = 'root' | 'label' | 'action' | 'startDecorator' | 'endDecorator';

export interface ChipPropsColorOverrides {}
export interface ChipPropsSizeOverrides {}
export interface ChipPropsVariantOverrides {}

export type ChipSlotsAndSlotProps = CreateSlotsAndSlotProps<
  ChipSlot,
  {
    root: SlotProps<'div', {}, ChipOwnerState>;
    label: SlotProps<'span', {}, ChipOwnerState>;
    action: SlotProps<
      'button',
      {
        href?: string;
        to?: string;
      },
      ChipOwnerState
    >;
    startDecorator: SlotProps<'span', {}, ChipOwnerState>;
    endDecorator: SlotProps<'span', {}, ChipOwnerState>;
  }
>;

export interface ChipTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P &
    ChipSlotsAndSlotProps & {
      /**
       * The content of the component.
       */
      children?: React.ReactNode;
      /**
       * The color of the component. It supports those theme colors that make sense for this component.
       * @default 'primary'
       */
      color?: OverridableStringUnion<ColorPaletteProp, ChipPropsColorOverrides>;
      /**
       * If `true`, the component is disabled.
       * @default false
       */
      disabled?: boolean;
      /**
       * Element placed after the children.
       */
      endDecorator?: React.ReactNode;
      /**
       * Element action click handler.
       */
      onClick?: React.MouseEventHandler<HTMLButtonElement>;
      /**
       * The size of the component.
       * It accepts theme values between 'sm' and 'lg'.
       * @default 'md'
       */
      size?: OverridableStringUnion<'sm' | 'md' | 'lg', ChipPropsSizeOverrides>;
      /**
       * Element placed before the children.
       */
      startDecorator?: React.ReactNode;
      /**
       * The system prop that allows defining system overrides as well as additional CSS styles.
       */
      sx?: SxProps;
      /**
       * The variant to use.
       * @default 'solid'
       */
      variant?: OverridableStringUnion<VariantProp, ChipPropsVariantOverrides>;
    };
  defaultComponent: D;
}

export type ChipProps<
  D extends React.ElementType = ChipTypeMap['defaultComponent'],
  P = { component?: React.ElementType },
> = OverrideProps<ChipTypeMap<P, D>, D>;

export interface ChipOwnerState extends ApplyColorInversion<ChipProps> {
  /**
   * If `true`, the chip is clickable.
   */
  clickable: boolean;
  /**
   * If `true`, the action slot's focus is visible.
   */
  focusVisible?: boolean;
}
