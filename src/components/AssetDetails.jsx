import { useParams } from "react-router-dom";

const AssetDetails = () => {
  const { id: assetId } = useParams();

  return (
    <div>
      Asset Details {assetId}
    </div>
  );
};

export default AssetDetails;