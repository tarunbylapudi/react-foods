import Card from "../common/Card";
import styles from "./css/AvailableMeals.module.css";
import MealItem from "./mealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Butter Chicken",
    description: "Creamy tomato-based curry with tender chicken pieces",
    price: 150,
  },
  {
    id: "m2",
    name: "Biryani",
    description:
      "Aromatic rice dish cooked with meat, spices, and fragrant herbs",
    price: 250,
  },
  {
    id: "m3",
    name: "Masala Dosa",
    description: "Thin rice and lentil crepe filled with spiced potato filling",
    price: 50,
  },
  {
    id: "m4",
    name: "Paneer Tikka",
    description: "Grilled cottage cheese cubes marinated in Indian spices",
    price: 175,
  },
  {
    id: "m5",
    name: "Chole Bhature",
    description: "Deep-fried bread with spicy chickpea curry",
    price: 150,
  },
  {
    id: "m6",
    name: "Dosa",
    description:
      "Thin crispy pancake made from fermented rice and lentil batter",
    price: 40,
  },
  {
    id: "m7",
    name: "Tandoori Chicken",
    description: "Marinated chicken cooked in a traditional clay oven",
    price: 175,
  },
  {
    id: "m8",
    name: "Gulab Jamun",
    description: "Deep-fried sweet dumplings soaked in sugar syrup",
    price: 99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem meal={meal} key={meal.id} />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
