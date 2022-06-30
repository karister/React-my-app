import React from "react";

function Warnning(param) {
   if (!param.isShow) {
       return null;
   }

  return (
    <div className="warnning">
        Warning!
    </div>
  );
}

class Page extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        }
    }

    handleClick() {
        this.setState({
            isShow: !this.state.isShow
        });
    }

    render() {
        return (
            <div>
                <Warnning isShow={this.state.isShow}/>
                <button onClick={this.handleClick.bind(this)}>Toggle</button>
            </div>
        );
    }
}

export default Page;
