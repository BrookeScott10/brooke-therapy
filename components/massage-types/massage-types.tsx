import { Smile, Leaf, Dumbbell, Heart } from "lucide-react"

const massageTypes = [
  {
    icon: Smile,
    title: "FACE MASSAGE",
    description: "Rejuvenating facial massage techniques that nourishes and lifts",
  },
  {
    icon: Leaf,
    title: "THAI MASSAGE",
    description: "Traditional Thai techniques that release tightness, promotes optimal flexibility",
  },
  {
    icon: Dumbbell,
    title: "SPORTS MASSAGE",
    description: "Performance recovery massage designed to restore and optimize sports performance",
  },
  {
    icon: Heart,
    title: "PRENATAL MASSAGE",
    description: "Gentle prenatal treatments designed to nurture expectant mothers & relax",
  },
]

export default function MassageTypes() {
  return (
    <section className="py-16 bg-spa-beige">
      <div className="max-w-[1236px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {massageTypes.map((massage, index) => {
            const IconComponent = massage.icon
            return (
              <div key={index} className="text-center group cursor-pointer">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                  <IconComponent className="w-10 h-10 text-spa-brown" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg text-spa-brown mb-2">{massage.title}</h3>
                <p className="text-sm text-spa-brown/70 leading-relaxed">{massage.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
