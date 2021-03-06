const GSheetReader = require('g-sheets-api');
class DataReaderPage{

processExcel(fileName) {
    //Read the Excel File data.
    const XLSX = require('xlsx');
    const workbook = XLSX.readFile('D:\\WebdriverResuableComponents-06-11-2020\\WebdriverResuableComponents-06-11-2020\\WebdriverResuableComponents\\TestData\\' + fileName);
    
    //Fetch the name of First Sheet.
    const firstSheet = workbook.SheetNames[0];
    
    //Read all rows from First Sheet into an JSON array.
    let excelRows = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheet],{defval:""});
    return excelRows;
    };

    
}
export default new DataReaderPage();
