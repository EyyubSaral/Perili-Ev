import "./styles.css";
export default function HouseCard({ houseData, index, array }) {
  console.log(houseData); // objeler bunları al array'e çevir döndür
  console.log(index); //-hala hiçbir fikrim yok- buyuk ihtiaml ile {array.length} / {index + 1} kısmı yapılacak 11/10 gibi
  console.log(array); //^ """" ^
  //daha den return koymadın kafanı karıştırmasın diye, !!!sonradan koy!!!
  return (
    <>
      <p>
        {array.length}/{index + 1}
      </p>
      <img src={houseData.image} alt={houseData.location} />
      <div>
        <ul>
          {Object.entries(houseData).map(([key, value]) =>
            key === "image" || key === "id" ? null : (
              <li key={key}>
                <span>{key}:</span>
                {typeof value === "boolean"
                  ? value
                    ? "Evet"
                    : "Hayır"
                  : value}
              </li>
            )
          )}
        </ul>
      </div>
    </>
  );
}
