import { default as React } from 'react';
export interface MediaWidgetProps {
    src: string;
    type: 'image' | 'video';
    title?: string;
    alt?: string;
    width?: number | string;
    height?: number | string;
    autoPlay?: boolean;
    controls?: boolean;
    loop?: boolean;
}
declare const MediaWidget: React.FC<MediaWidgetProps>;
export default MediaWidget;
//# sourceMappingURL=MediaWidget.d.ts.map