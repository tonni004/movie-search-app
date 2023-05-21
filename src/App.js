import { Suspense, lazy, Component } from "react";
import { Route, Switch } from "react-router-dom";

// components
import Navigation from "components/Navigation";
import Spinner from './components/Spinner/Spinner';

const Home = lazy(() => import('./Pages/HomePage'));
const Movies = lazy(() => import('./Pages/MoviesPage/MoviesPage'));
const Film = lazy(() => import('./Pages/FilmPage/FilmPage'));
const Trends = lazy(() => import('./Pages/TrendsPage/TrendsPage'));
const NotFound = lazy(() => import('./Pages/NotFoundPage/NotFoundPage'));

class App extends Component {
  render() {

    return (
      <>
        <Navigation />


        <Suspense fallback={
          <Spinner />
        }>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movies" component={Movies} />
            <Route path="/movies/:moviesId" component={Film} />
            <Route path="/trends" component={Trends} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </>
    );
  }
}
;

export default App;
