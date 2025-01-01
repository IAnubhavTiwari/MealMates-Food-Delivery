// import Image from "@/assets/hero_pizza.png"
import { Badge } from "./badge"
import { Timer } from "lucide-react"
import AvailableMenu from "./AvailableMenu"


const RestaurantDetail = () => {
  return (
    <div className="max-w-6xl mx-auto my-10">
    <div className="w-full">
      <div className="relative w-full h-32 md:h-64 lg:h-72">
        <img
          src="https://imgs.search.brave.com/V56_nZeXYvV5Z-p8IwJrN87_bdF-hzQa22FMCKxMwT4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/cmVzdGF1cmFudC1i/cmVha2Zhc3QuanBn/P3dpZHRoPTEwMDAm/Zm9ybWF0PXBqcGcm/ZXhpZj0wJmlwdGM9/MA"
          alt="res_image"
          className="object-cover w-full h-full rounded-lg shadow-lg"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between">
          <div className="my-5">
            <h1 className="font-medium text-xl">
                {/* {singleRestaurant?.restaurantName || "Loading..."} */}
              Tandoori Tadka</h1>
            <div className="flex gap-2 my-2">
              {["Biryani", "Momos"].map((cuisine: string, idx: number) => (
                <Badge key={idx}>{cuisine}</Badge>
              ))}
              </div>
 <div className="flex md:flex-row flex-col gap-2 my-5">
              <div className="flex items-center gap-2">
                <Timer className="w-5 h-5" />
                <h1 className="flex items-center gap-2 font-medium">
                  Delivery Time: <span className="text-[#D19254]">35 mins</span>
                </h1>
              </div>

            </div>
            </div>
            </div>

              <AvailableMenu/>

      </div>
      </div>
  )
}

export default RestaurantDetail