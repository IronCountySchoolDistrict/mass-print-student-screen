import $ from 'jquery';

export default function() {
  $(() => {
    studentFunctions.forEach((object, index) => {
      if(object.name === "Printing"){
        studentFunctions.splice(index+4,0, {
            address: "/admin/studentlist/counselor/massprint.html",
            name: "Mass Print Student Screen"
        });
      }
    })
  });
}
