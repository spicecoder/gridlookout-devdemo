// GridRenderer.js
// GridRenderer.js
import React from "react";

const HeaderComponent = () => <header>Header Content</header>;

const SidebarComponent = () => (
    <nav
      style={{
        display: 'block',   // Ensure the nav behaves as a block element
        margin: 0,          // Reset default margins
        padding: 0,         // Reset default paddings
        width: '100%',      // Take full width of the cell
        height: '100%'      // Take full height of the cell
      }}
    >
      <ul
        style={{
         
          padding: '10px',       // Add some padding for better readability
          margin: '5px',             // Reset default margins
          textAlign: 'left'      // Align list items to the left
        }}
      >
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </nav>
  );
  
const MainComponent = ({ viewport }) => (
    <div style={{ 
        width: 150,   // 0.8 matches the cell width in schema
        height: 200,  // 0.9 matches the cell height in schema
        display: 'flex',          
        justifyContent: 'center', 
        backgroundColor:'cyan',
        alignItems: 'center',
        border: '1px solid #ddd'    // Optional: to visualize the viewport-sized container      
    }}>
        Item 1
    </div>
    
);

const componentsMap = {
    HeaderComponent: HeaderComponent,
    SidebarComponent: SidebarComponent,
    MainComponent: MainComponent
};

export function GridRenderer({ schema }) {
    const layer = schema.layers[0];
    return (
        <div
            style={{
                display: "grid",
                gridTemplateRows: `repeat(10, 1fr)`,
                gridTemplateColumns: `repeat(10, 1fr)`,
                width: layer.viewport.width,
                height: layer.viewport.height,
                position: "relative"
            }}
        >
            {Object.entries(layer.cells).map(([key, cell]) => {
                const Component = componentsMap[cell.content];
                return (
                    <div
                        key={key}
                        style={{
                            gridColumnStart: cell.startX * 10 + 1,
                            gridColumnEnd: (cell.startX + cell.width) * 10 + 1,
                            display:"flex",
                            justifyContent:"center", /* Center horizontally */
                            alignItems: "center", /* Center vertically */
                            gridRowStart: cell.startY * 10 + 1,
                            gridRowEnd: (cell.startY + cell.height) * 10 + 1,
                            border: "1px solid #ccc",
                            
                                width: "100%",           /* Ensures the component takes the full width */
                                height:"100%",           /* Ensures the component takes the full height */
                              
                            backgroundColor: cell.style?.backgroundColor || 'transparent'
                        }}
                    >  <>
                        {Component && < Component viewport={layer.viewport} />}
                        </>
                    </div>
                );
            })}
        </div>
    );
}
export default GridRenderer

