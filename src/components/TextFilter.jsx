import { useDispatch } from "react-redux";
import { sliceActions } from "../store/store";

const DEBOUNCE_TIME = 250;
let debounceTimer;

const TextFilter = () => {
  const dispatch = useDispatch();

  const filterChangeHandler = (ev) => {
    clearTimeout(debounceTimer);

    debounceTimer = setTimeout((filterText) => {
      console.log(filterText);
      dispatch(sliceActions.setFilterTerm(filterText));
    },
      DEBOUNCE_TIME,
      ev.target.value.trim()
    );
  };

  return (
    <div className="dv-filter">
      <input className="text-input" type="text"
        placeholder="Filter cypto currencies..."
        onChange={filterChangeHandler} />
    </div>
  );
};

export default TextFilter;