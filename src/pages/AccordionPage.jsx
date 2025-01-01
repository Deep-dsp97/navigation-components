import Accordion from "../components/Accordion";

function AccordionPage() {
  const items =  [
    {
      id: '1',
      label:'React',
      content: 'R-Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      id: '2',
      label:'CSS',
      content: 'C-Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      id: '3',
      label:'Javascript',
      content: 'J-Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }
  ];

  return (
    <>
      <Accordion items={items}/>
    </>
  );
}

export default AccordionPage;
