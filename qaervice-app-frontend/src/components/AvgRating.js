import './AvgRating.css';
const AvgRating = ({ rating=1, color='hsl(var(--success-500))' }) => {
  const proportion = rating / 10;
  const ARWrapper = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
  const ARCircle = {
    width: '45%',
    aspectRatio: '1 / 1',
    borderRadius: '50%',
    backgroundColor: 'hsl(var(--grey-700))',
    position: 'relative',
    overflow: 'hidden',
  }
  const ARInnerCircle = {
    width: '80%',
    aspectRatio: '1 / 1',
    borderRadius: '50%',
    backgroundColor: 'hsl(var(--grey-600))',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
  }
  const Q1 = {
    width: '50%',
    height: '50%',
    backgroundColor: color,
    position: 'absolute',
    top: '0',
    left: '0',
    transform: `skew(${proportion < 0.25 ? 90 - (proportion) / 0.25 * 90 : 0}deg)`,
    transformOrigin: 'bottom',
    outline: `1px solid ${color}`,
  }
  const Q2 = {
    width: '50%',
    height: '50%',
    backgroundColor: color,
    position: 'absolute',
    top: '0',
    right: '0',
    display: proportion > 0.25 ? 'block' : 'none',
    transform: `skew(0, -${proportion > 0.25 && proportion < 0.50 ? 90 - (proportion - 0.25) / 0.25 * 90 : 0}deg)`,
    transformOrigin: 'left',
    outline: `1px solid ${color}`,
  }
  const Q3 = {
    width: '50%',
    height: '50%',
    backgroundColor: color,
    position: 'absolute',
    bottom: '0',
    right: '0',
    display: proportion > 0.50 ? 'block' : 'none',
    transform: `skew(${proportion > 0.50 && proportion < 0.75 ? (0.25 - proportion - 0.50) / 0.25 * 90 : 0}deg)`,
    transformOrigin: 'top',
    outline: `1px solid ${color}`,
  }
  const Q4 = {
    width: '50%',
    height: '50%',
    backgroundColor: color,
    position: 'absolute',
    bottom: '0',
    left: '0',
    display: proportion > 0.75 ? 'block' : 'none',
    transform: `skew(0, -${proportion > 0.74 ? 90 - (proportion - 0.75) / 0.25 * 90 : 0}deg)`,
    transformOrigin: 'right',
    outline: `1px solid ${color}`,
  }
  return (
    <div style={ARWrapper}>
      <div style={ARCircle}>
        <div className='foo' style={ARInnerCircle}></div>
        <h2 className='ARH2'>{rating.toFixed(1)}</h2>
        <div style={Q1}></div> 
        <div style={Q2}></div> 
        <div style={Q3}></div> 
        <div style={Q4}></div> 
      </div>
    </div>
  );
}

export default AvgRating
