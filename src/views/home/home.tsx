import "./home.scss";
import { useAppSelector, useAppDispatch } from "../../hooks/globalHooks";
import { updateContries, fetchCountriesData } from "../../services/countries";
import { useEffect } from "react";
const HomeView = () => {
  const countries = useAppSelector((state) => state.contries.value);
  const dispatch = useAppDispatch();
  const updateCountriesData = async () => {
    await fetchCountriesData().then((response) => {
      const countriesWithId = response.map((item, key) => {
        return {
          ...item,
          id: key,
        };
      });
      dispatch(updateContries(countriesWithId));
    });
  };
  useEffect(() => {
    updateCountriesData();
  }, [countries]);

  return (
    <div className="home-view__container">
      <header className="home-view__header">
        <div className="home-view__header-logo">
          <h1>Home</h1>
        </div>
      </header>
      <main className="home-view__content">
        <div className="home-view__content-title">
          <p>Data Of Countries </p>
        </div>

        <div className="home-view_datatable">
          {countries.map((item) => {
            return <div key={item.id}>Name: {item.name.common}</div>;
          })}
        </div>
      </main>
    </div>
  );
};

export default HomeView;
