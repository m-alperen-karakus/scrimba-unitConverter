const { degrees, PDFDocument, rgb, StandardFonts } = PDFLib;

let input = document.getElementById('input')
let length = document.getElementById('length')
let volume = document.getElementById('volume')
let mass = document.getElementById('mass')
let convert = document.getElementById('convert')

let customerName = document.getElementById('customerName')
let save = document.getElementById('save')

convert.addEventListener('click', converter)
save.addEventListener("click", modifyPdf)


function converter(){
    const inputValue = input.value
    let feet = (inputValue * 3.281).toFixed(3)
    let gallon = (inputValue * 0.264).toFixed(3)
    let pound = (inputValue * 2.204).toFixed(3)
    let meter = (inputValue * 0.3048).toFixed(3)
    let liter = (inputValue * 3.78541178).toFixed(3)
    let kilogram = (inputValue * 0.48).toFixed(3)

    length.textContent = inputValue + " meters = " +feet +" feet" + " | " + inputValue +" feet = "+ meter +" meters"
    volume.textContent = inputValue + " liters = " +gallon +" gallons" + " | " + inputValue +" gallons = "+ liter +" liters"
    mass.textContent = inputValue + " kilos = " +pound +" pounds" + " | " + inputValue +" pound = "+ kilogram +" kilos"

}
// converter()


async function modifyPdf() {
  const url = './ilovepdf_merged.pdf'
  const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())

  const pdfDoc = await PDFDocument.load(existingPdfBytes)
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)

  const pages = pdfDoc.getPages()
  const firstPage = pages[0]
  const { width, height } = firstPage.getSize()
  firstPage.drawText(customerName.value, {
    x: 150,
    y: height / 2 + 300,
    size: 50,
    font: helveticaFont,
    color: rgb(0.95, 0.1, 0.1),
    rotate: degrees(0),
  })

  const pdfBytes = await pdfDoc.save()

  download(pdfBytes, "zaha-film-sözleşme", "application/pdf")
}


