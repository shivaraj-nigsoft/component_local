import { default as React } from 'react';
export interface TextWidgetProps {
    content: string;
    title?: string;
    variant?: 'note' | 'title' | 'description';
    align?: 'left' | 'center' | 'right';
    color?: string;
    backgroundColor?: string;
}
declare const TextWidget: React.FC<TextWidgetProps>;
export default TextWidget;
//# sourceMappingURL=TextWidget.d.ts.map