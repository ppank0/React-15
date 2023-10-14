var Table = React.createClass({
    displayName: "Table",
    render: function(){
        return React.DOM.div(
            React.DOM.h1(
                    {className:"title"},
                this.props.name
                ),
                React.DOM.table(
                {className: "table"},
                React.DOM.thead(null,
                    React.DOM.tr(null,
                        React.DOM.th(null, 'ID'),
                        React.DOM.th(null, 'Category'),
                        React.DOM.th(null, 'Price'),
                        React.DOM.th(null, 'Img'),
                    )
                ),
                React.DOM.tbody(
                null,
                this.props.items.map(function(item){
                    return React.DOM.tr(
                    {key: item.id},
                    React.DOM.td(null, item.id),
                    React.DOM.td(null, item.category),
                    React.DOM.td(null, item.price),
                    React.DOM.td(
                        null,
                    React.DOM.img({
                        src: "./data/img/" + item.image,
                        className: "item_img",
                        alt: item.name
                    })
                    )
                );
            }),
            ))
        )
    },
});