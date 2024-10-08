import 'antd/dist/antd.css';
import '@formily/antd/dist/antd.css';
import VisualDesign from './VisualDesign';
import { prompt } from './VisualDesign/prompt';
export type {
  VisualDesignContextTypes,
  MessageEventDataProps,
  MessageEventProps,
  WidgetTypes,
  HeaderTypes,
  VisualDesignProps,
  MessageChildDataProps,
  SelectedItemTypes,
} from './VisualDesign/context';
export type { ComponentTreeWidgetProps } from './VisualDesign/ComponentTreeWidget';
export type { CompositePanelProps } from './VisualDesign/CompositePanel';
declare const _default: typeof VisualDesign & {
  prompt: typeof prompt;
};
export default _default;
