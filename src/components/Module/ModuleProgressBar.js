import ProgressBar from 'react-bootstrap/ProgressBar';

function StripedExample() {
  return (
    <div>
      <ProgressBar striped variant="bule" now={60} />
    </div>
  );
}

export default StripedExample;