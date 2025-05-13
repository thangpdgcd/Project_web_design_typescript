const LimitationsWithPortals = () => {

    return (
        <div className="container">
        <h1>Limitations with Portals</h1>
        <p>Portals are a powerful feature in React, but they come with some limitations:</p>
        <ul>
            <li>Portals do not automatically handle focus management.</li>
            <li>Portals can complicate the component hierarchy.</li>
            <li>Event bubbling may not work as expected.</li>
            <li>Styling can be tricky, especially with z-index issues.</li>
        </ul>
        </div>
    );
    }   
    export default LimitationsWithPortals;