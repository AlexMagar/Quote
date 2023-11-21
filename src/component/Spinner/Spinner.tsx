import style from "./Spinner.module.scss";

const Spinner = () => {

    const content = (
        <>
            <div className={style.Spinner}>
                <div></div>
                <div></div>
            </div>
        </>
    )
  return content
}

export default Spinner