import styles from "./SearchBox.module.css";
// import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  // const [filter, setFilter] = useState("");
  // useEffect(() => {
  //   dispatch(changeFilter(filter));
  // }, [filter]);
  const searchFilter = useSelector(selectNameFilter);
  return (
    <div className={styles.searchContainer}>
      <label className={styles.searchLabel}>Find contacts by name</label>
      <input
        className={styles.searchInput}
        type="text"
        onChange={(e) => {
          dispatch(changeFilter(e.target.value));
        }}
        value={searchFilter}
      />
    </div>
  );
}
