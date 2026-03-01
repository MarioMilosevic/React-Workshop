import LogActionModalFooter from "./components/LogActionModalFooter";

export default function App() {
  const handleBack = () => {
    console.log("go back");
  };
  const handleForward = () => {
    console.log("go forward");
  };

  return (
    <LogActionModalFooter
      backButtonText="Back"
      forwardButtonText="Next"
      handleGoBack={handleBack}
      handleGoForward={handleForward}
      isForwardDisabled
    />
  );
}
