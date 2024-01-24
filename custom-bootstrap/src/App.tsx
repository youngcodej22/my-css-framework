// import './App.css'
import "./styles/style.css";

function App() {
  const imageUrl = `https://via.placeholder.com/250x250.png?text=250x250`;

  return (
    <>
      <div className="container-fluid">
        <div className="row grid">
          <div className="col-1">col-1</div>
          <div className="col-1">col-1</div>
          <div className="col-1">col-1</div>
          <div className="col-1">col-1</div>
          <div className="col-1">col-1</div>
          <div className="col-1">col-1</div>
          <div className="col-1">col-1</div>
          <div className="col-1">col-1</div>
          <div className="col-1">col-1</div>
          <div className="col-1">col-1</div>
          <div className="col-1">col-1</div>
          <div className="col-1">col-1</div>
        </div>
        <div className="row grid">
          <div className="col-3">col-3</div>
          <div className="col-3">col-3</div>
          <div className="col-3">col-3</div>
          <div className="col-3">col-3</div>
        </div>
        <div className="row grid">
          <div className="col-4">col-4</div>
          <div className="col-4">col-4</div>
          <div className="col-4">col-4</div>
        </div>
        <div className="row grid">
          <div className="col-2">col-2</div>
          <div className="col-3">col-3</div>
          <div className="col-1">col-1</div>
          <div className="col-2">col-2</div>
          <div className="col-4">col-4</div>
        </div>
        <div className="row grid">
          <div className="col-8">col-8</div>
          <div className="col-4">col-4</div>
        </div>
        <div className="row grid">
          <div className="col-2">col-2</div>
          <div className="col-2">col-2</div>
          <div className="col-2">col-2</div>
          <div className="col-2">col-2</div>
          <div className="col-2">col-2</div>
          <div className="col-2">col-2</div>
        </div>
        <div className="row grid">
          <div className="col">col 12</div>
        </div>
        <hr />
        <h2>Buttons</h2>
        <h3>Standard</h3>
        <a href="" className="btn btn-primary">
          Primary
        </a>
        <a href="" className="btn btn-secondary">
          Secondary
        </a>
        <a href="" className="btn btn-success">
          Success
        </a>
        <a href="" className="btn btn-danger">
          Danger
        </a>
        <a href="" className="btn btn-warning">
          Warning
        </a>
        <a href="" className="btn btn-info">
          Info
        </a>
        <a href="" className="btn btn-muted">
          Muted
        </a>
        <a href="" className="btn btn-light">
          Light
        </a>
        <a href="" className="btn btn-dark">
          Dark
        </a>
        <h3>Small</h3>
        <a href="" className="btn btn-primary btn-sm">
          Primary
        </a>
        <a href="" className="btn btn-secondary btn-sm">
          Secondary
        </a>
        <a href="" className="btn btn-success btn-sm">
          Success
        </a>
        <a href="" className="btn btn-danger btn-sm">
          Danger
        </a>
        <a href="" className="btn btn-warning btn-sm">
          Warning
        </a>
        <a href="" className="btn btn-info btn-sm">
          Info
        </a>
        <a href="" className="btn btn-muted btn-sm">
          Muted
        </a>
        <a href="" className="btn btn-light btn-sm">
          Light
        </a>
        <a href="" className="btn btn-dark btn-sm">
          Dark
        </a>
        <h3>Large</h3>
        <a href="" className="btn btn-primary btn-lg">
          Primary
        </a>
        <a href="" className="btn btn-secondary btn-lg">
          Secondary
        </a>
        <a href="" className="btn btn-success btn-lg">
          Success
        </a>
        <a href="" className="btn btn-danger btn-lg">
          Danger
        </a>
        <a href="" className="btn btn-warning btn-lg">
          Warning
        </a>
        <a href="" className="btn btn-info btn-lg">
          Info
        </a>
        <a href="" className="btn btn-muted btn-lg">
          Muted
        </a>
        <a href="" className="btn btn-light btn-lg">
          Light
        </a>
        <a href="" className="btn btn-dark btn-lg">
          Dark
        </a>
        <hr />
        <h2>Links</h2>
        <a href="" className="text-primary">
          Primary
        </a>
        <br />
        <a href="" className="text-secondary">
          Secondary
        </a>
        <br />
        <a href="" className="text-success">
          Success
        </a>
        <br />
        <a href="" className="text-danger">
          Danger
        </a>
        <br />
        <a href="" className="text-warning">
          Warning
        </a>
        <br />
        <a href="" className="text-info">
          Info
        </a>
        <br />
        <a href="" className="text-muted">
          Muted
        </a>
        <br />
        <a href="" className="text-light">
          Light
        </a>
        <br />
        <a href="" className="text-dark">
          Dark
        </a>
        <br />
        <hr />
        <h2>Alerts</h2>
        <div className="alert alert-primary">
          <span>This is a primary alert.</span>
          Lorem ipsum sodales donec nibh litora habitant, est ligula convallis
          ullamcorper congue duis facilisis, adipiscing fusce euismod aptent
          nibh sit placerat morbi ultrices etiam lectus aliquam dui placerat.
        </div>
        <div className="alert alert-secondary">
          <span>This is a secondary alert.</span>
          Lorem ipsum sodales donec nibh litora habitant, est ligula convallis
          ullamcorper congue duis facilisis, adipiscing fusce euismod aptent
          nibh sit placerat morbi ultrices etiam lectus aliquam dui placerat.
        </div>
        <div className="alert alert-success">
          <span>This is a secondary alert.</span>
          Lorem ipsum sodales donec nibh litora habitant, est ligula convallis
          ullamcorper congue duis facilisis, adipiscing fusce euismod aptent
          nibh sit placerat morbi ultrices etiam lectus aliquam dui placerat.
        </div>
        <div className="alert alert-danger">
          <span>This is a secondary alert.</span>
          Lorem ipsum sodales donec nibh litora habitant, est ligula convallis
          ullamcorper congue duis facilisis, adipiscing fusce euismod aptent
          nibh sit placerat morbi ultrices etiam lectus aliquam dui placerat.
        </div>
        <div className="alert alert-warning">
          <span>This is a secondary alert.</span>
          Lorem ipsum sodales donec nibh litora habitant, est ligula convallis
          ullamcorper congue duis facilisis, adipiscing fusce euismod aptent
          nibh sit placerat morbi ultrices etiam lectus aliquam dui placerat.
        </div>
        <div className="alert alert-info">
          <span>This is a secondary alert.</span>
          Lorem ipsum sodales donec nibh litora habitant, est ligula convallis
          ullamcorper congue duis facilisis, adipiscing fusce euismod aptent
          nibh sit placerat morbi ultrices etiam lectus aliquam dui placerat.
        </div>
        <div className="alert alert-muted">
          <span>This is a secondary alert.</span>
          Lorem ipsum sodales donec nibh litora habitant, est ligula convallis
          ullamcorper congue duis facilisis, adipiscing fusce euismod aptent
          nibh sit placerat morbi ultrices etiam lectus aliquam dui placerat.
        </div>
        <div className="alert alert-light">
          <span>This is a secondary alert.</span>
          Lorem ipsum sodales donec nibh litora habitant, est ligula convallis
          ullamcorper congue duis facilisis, adipiscing fusce euismod aptent
          nibh sit placerat morbi ultrices etiam lectus aliquam dui placerat.
        </div>
        <div className="alert alert-dark">
          <span>This is a secondary alert.</span>
          Lorem ipsum sodales donec nibh litora habitant, est ligula convallis
          ullamcorper congue duis facilisis, adipiscing fusce euismod aptent
          nibh sit placerat morbi ultrices etiam lectus aliquam dui placerat.
        </div>
        <hr />
        <h2>Images</h2>
        <div className="row">
          <div className="col-2 text-center">
            <img src={imageUrl} className="img-fluid" alt="image" />
            <small>Standard</small>
          </div>
          <div className="col-2 text-center">
            <img src={imageUrl} className="img-fluid img-thumb" alt="image" />
            <small>Thumbnail</small>
          </div>
          <div className="col-2 text-center">
            <img src={imageUrl} className="img-fluid img-rounded" alt="image" />
            <small>Rounded</small>
          </div>
          <div className="col-2 text-center">
            <img
              src={imageUrl}
              className="img-fluid img-rounded-corner"
              alt="image"
            />
            <small>Rounded Corners</small>
          </div>
          <div className="col-2 text-center">
            <img
              src={imageUrl}
              className="img-fluid img-rounded-corner-lt"
              alt="image"
            />
            <small>Left Round (t or b)</small>
          </div>
          <div className="col-2 text-center">
            <img
              src={imageUrl}
              className="img-fluid img-rounded-corner-rb"
              alt="image"
            />
            <small>Right Round (t or b)</small>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <img src={imageUrl} className="img-fluid img-block" alt="image" />
            <small>Center Align</small>
          </div>
        </div>
        <hr />
        <h2>Cards</h2>
        <div className="card">
          <div className="card-title">Card Title</div>
          <p>
            Lorem ipsum sodales donec nibh litora habitant, est ligula convallis
            ullamcorper congue duis facilisis, adipiscing fusce euismod aptent
            nibh sit placerat morbi ultrices etiam lectus aliquam dui placerat.
          </p>
        </div>
        <hr />
        <h2>Tables</h2>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>First</th>
              <th>Last</th>
              <th>Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
        <br />
        <table className="table bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>First</th>
              <th>Last</th>
              <th>Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
        <br />
        <table className="table dark">
          <thead>
            <tr>
              <th>#</th>
              <th>First</th>
              <th>Last</th>
              <th>Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
        <br />
        <table className="table dark bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>First</th>
              <th>Last</th>
              <th>Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
        <br />
        <table className="table">
          <thead className="dark">
            <tr>
              <th>#</th>
              <th>First</th>
              <th>Last</th>
              <th>Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
        <br />
        <table className="table">
          <thead className="light">
            <tr>
              <th>#</th>
              <th>First</th>
              <th>Last</th>
              <th>Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
