import React from "react";
import axios from "axios";

const config = {
  method: "get",
  url: "https://dummyjson.com/products"
};

export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  getData = (query) => {
    this.setState({
      isLoading: true,
      error: false
    });

    console.log(config);
    axios(config)
      .then((res) =>
        this.setState({
          data: res.data.products,
          isLoading: false,
          error: false
        })
      )
      .catch((err) => {
        this.setState({
          error: true,
          errorMessage: err,
          isLoading: false
        });
      });
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    const { data } = this.state;
    const items = data;
    // console.log(data);
    return (
      <div>
        <div>
          {items &&
            items.map((item) => (
              <div key={item.id}>
                <div>
                  <table>
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>{item.description}</td>
                      <td>Rs.{item.price}</td>
                      <td>
                        <button>Add </button>
                      </td>
                      <td>
                        <button>Update </button>
                      </td>
                      <td>
                        <button>Delete</button>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}
