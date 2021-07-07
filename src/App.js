import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h2>CREATE PRODUCT</h2>
      <form action="/action_page.php">
      <label for="name">Product Name:</label>
      <input type="text" id="name" name="name"><br>
      <label for="price">Product price:</label>
      <input type="number" id="price" name="price" min="1" max="100000000000"><br>
      <input type="submit" value="Submit">
      </form>
     </div>
  );
}
