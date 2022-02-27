import { MealItem } from "./MealItem.js"

function MealList ({meals}) {
    return(
        <div className="list">
            {meals.map(meal => (
                <MealItem key={meal.idMeal} {...meal}  />
            ))}
        </div>
    )
}
export {MealList}