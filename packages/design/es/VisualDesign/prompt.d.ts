import type { VisualDesignProps, SelectedItemTypes } from './context';
export declare type VisualDesignValue = {
  type: string;
};
export declare function prompt(props: VisualDesignProps): Promise<SelectedItemTypes[] | null>;
