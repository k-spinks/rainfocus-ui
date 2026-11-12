export default function CreateCard({ icon, description }) {
  return (
    <div className="create-card-div">
      <img src={icon} alt="" />
      <p>{description}</p>
    </div>
  )
}
