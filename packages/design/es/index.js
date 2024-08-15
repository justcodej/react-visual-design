import 'antd/dist/antd.css';
import '@formily/antd/dist/antd.css';
import VisualDesign from './VisualDesign';
import { attachPropertiesToComponent } from '@kp-react-visual-design/utils';
import { prompt } from './VisualDesign/prompt';
export default attachPropertiesToComponent(VisualDesign, {
  prompt: prompt,
});