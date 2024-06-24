import { List, ListItem } from "./List";
import { Nav, NavItem } from "./Nav";

const movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    starRating: 4.9,
    rating: "R",
    year: 1994,
    genre: "Drama",
    runtime: 142,
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
  },
  {
    id: 2,
    title: "The Godfather",
    starRating: 4.8,
    rating: "R",
    year: 1972,
    genre: "Crime",
    runtime: 175,
    cast: ["Marlon Brando", "Al Pacino", "James Caan"],
  },
  {
    id: 3,
    title: "The Dark Knight",
    starRating: 4.7,
    rating: "PG-13",
    year: 2008,
    genre: "Action",
    runtime: 152,
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
  },
];

export const Movies = () => {
  return (
    <div className="divide-y divide-slate-100">
      <Nav>
        <NavItem href="" isActive>{`New Releases`}</NavItem>
        <NavItem href="">{`Top Rated`}</NavItem>
        <NavItem href="">{`Vincent's Picks`}</NavItem>
      </Nav>
      <List>
        {movies.map((movie) => (
          <ListItem key={movie.id} movie={movie} />
        ))}
      </List>
    </div>
  );
};
