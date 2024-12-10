
import  GridRenderer  from "./GridRenderer";


const App = () => {
  const schema = {
    layers: [
        {
            name: "MainLayer",
            viewport: { width: 300, height: 400 },
            cells: {
                header: {
                    startX: .1,
                    startY: 0,
                    width: 1,
                    height: 0.1,
                    content: "HeaderComponent",
                    style: {
                        backgroundColor: "#e3f2fd"  // Light blue
                    }
                },
                sidebar: {
                    startX: .1,
                    startY: 0.1,
                    width: 0.4, // Increased width from 0.19 to 0.3
                    height: 0.9,
                    content: "SidebarComponent",
                    style: {
                        backgroundColor: "#f5f5f5"  // Light gray
                    }
                },
                main: {
                    startX: 0.5, // Adjusted to match the increased sidebar width
                    startY: 0.1,
                    width: 0.7, // Reduced to maintain total width of 1
                    height: 0.9,
                    content: "MainComponent",
                    style: {
                        backgroundColor: "#ffffff"  // White
                    }
                }
            }
        }
    ]
};

  return <GridRenderer schema={schema} />;
};

export default App;



