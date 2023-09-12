const card = ({ imageId, action, entityType }) => {
  const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/${imageId}`;

  return (
    <div>
      <img src={imageUrl} />
      <h1>{action.text}</h1>
      <h1>{entityType}</h1>
    </div>
  );
};

export default card;
