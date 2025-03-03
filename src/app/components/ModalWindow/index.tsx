import "./style.scss";

export const ModalWindow = ({ config }: any): JSX.Element => {
  const { name, article, price } = config;

  return (
    <>
      <div className="modalWindowInstance__modal">
        <p>{name}</p>
        <p>{article}</p>
        <p>{price}</p>
      </div>
    </>
  );
};
