import { Button } from "./button";
import { Card, CardContent, CardFooter } from "./card"

const AvailableMenu = () => {
  return (
    <div className="md:p-4">
    <h1 className="text-xl md:text-2xl font-extrabold mb-6">
      Available Menus
    </h1>
    <div className="grid md:grid-cols-3 space-y-4 md:space-y-0">

    <Card className="max-w-xs mx-auto shadow-lg rounded-lg overflow-hidden">
        <img src="https://imgs.search.brave.com/V56_nZeXYvV5Z-p8IwJrN87_bdF-hzQa22FMCKxMwT4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/cmVzdGF1cmFudC1i/cmVha2Zhc3QuanBn/P3dpZHRoPTEwMDAm/Zm9ybWF0PXBqcGcm/ZXhpZj0wJmlwdGM9/MA" alt="" className="w-full h-40 object-cover" />
        <CardContent className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
        {/* {menu.name} */}Cutting-Chai
              </h2>
              <p className="text-sm text-gray-600 mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing.  {/* {menu.description} */}
                </p>
              <h3 className="text-lg font-semibold mt-4">
                Price: <span className="text-[#D19254]">₹80
                    {/* {menu.price} */}

                </span>
              </h3>
            </CardContent>
            <CardFooter className="p-4">
              <Button
                // onClick={() => {
                //   addToCart(menu);
                //   navigate("/cart");
                // }}
                className="w-full bg-orange hover:bg-hoverOrange"
              >
                Add to Cart
              </Button>
            </CardFooter>
        </Card>



        </div>
        </div>
  )
}

export default AvailableMenu