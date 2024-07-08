const PhotosynthesisCalculation = () => {
  return (
    <form className="formPhotosynthese bg-blue-500" id="carbonForm">
      <h2 className="text-center mb-4">
        Calcul de la photosynthèse de mon arbre :
      </h2>
      <p className="text-center mb-4">
        Avez-vous enregistré des épisodes de sécheresse sur votre territoire ces
        dernières années ?<br /> Si oui, cochez la case ci-dessous Sécheresse en
        Juillet-Août.
      </p>
      <div className="waterDeficit">
        <label htmlFor="waterDeficit">Sécheresse en juillet-août :</label>
        <input type="checkbox" id="waterDeficit" name="waterDeficit"></input>
      </div>
      <button id="calculatePhotosynthesisBtn" className="btn btn-primary">
        Calculer
      </button>
      <h2 className="mt-4 text-center">Résultat:</h2>
      <div className="result-container p-4 mx-auto my-3">
        <p
          id="photosynthesisResult"
          className="fs-2 fw- text-center mb-0 display-6"
        ></p>
      </div>
    </form>
  );
};

export default PhotosynthesisCalculation;
