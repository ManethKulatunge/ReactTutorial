const Pet = ({name, animal, breed}) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed)
    ]);
};

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {id : "something-important"}, "Adopt Me!"),
            React.createElement(Pet, {
                name: "Luna", 
                animal:"dog", 
                breed:"havanese"
            }), 
            React.createElement(Pet, {
                name: "Doink", 
                animal:"Cat", 
                breed:"Lion"
            }),
            React.createElement(Pet, {
                name: "Ma g", 
                animal:"Human", 
                breed:"Man"
            })
        ]);
};
        
ReactDOM.render(React.createElement(App), document.getElementById("root"));