import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

type Props = {
  file: string | Uint8Array | null;
};

const PdfViewer = (props: Props) => {
  if (!props.file) {
    return null;
  }

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: () => [],
    renderToolbar: () => <div></div>
  });

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
      <div
        style={{
          height: '750px',
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '3%'
        }}
      >
        <Viewer fileUrl={props.file} plugins={[defaultLayoutPluginInstance]} />
      </div>
    </Worker>
  );
};

export default PdfViewer;
