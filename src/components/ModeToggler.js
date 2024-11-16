function ModeToggler() {
  // Dark mode variables
  let darkModeOn = true;
  const darkMode = <h1>This is Dark Mode</h1>;
  const lightMode = <h1>This is Light Mode</h1>;
  // Switch Dark mode function
  const switchMode = () => {
    darkModeOn = !darkModeOn;
    console.log(darkModeOn);
  };
  return (
    <div>
      <h1>ModeToggler</h1>
      <button onClick={switchMode}>Switch Mode</button>
      {darkModeOn ? darkMode : lightMode}
    </div>
  );
}

export default ModeToggler;
