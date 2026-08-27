import Section1 from "./section1/section1";

const App = () => {
  const users=[
    {
     image:'https://images.unsplash.com/photo-1762341104634-998bbee0ccba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya2luZyUyMHByb2Zlc3Npb25hbHMlMjBzb2xvJTIwcGljc3xlbnwwfHwwfHx8MA%3D%3D',
     intro:'Prime customers that have access to bank credits and are satisfied with the current product',
     btn1:'Satisfied',
     color:'blue',
  },
    {
     image:'https://plus.unsplash.com/premium_photo-1661574784307-3bc01586ccc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWxzJTIwc29sbyUyMHBpY3N8ZW58MHx8MHx8fDA%3D',
     intro:'Prime customers that have access to bank credits and are not satisfied with current service',
     btn1:'Underserved',
     color:'navy',
  },
    {
     image:'https://plus.unsplash.com/premium_photo-1661504571994-c43e6eaacbf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWxzJTIwc29sbyUyMHBpY3N8ZW58MHx8MHx8fDA%3D',
     intro:'Customers from retail prime and sub-prime segments with no access ti bank credit',
     btn1:'Underbanked',
     color:'seagreen',
  },
    {
     image:'https://images.unsplash.com/photo-1782069326883-090221bfcd6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWxzJTIwc29sbyUyMHBpY3N8ZW58MHx8MHx8fDA%3D',
     intro:'Prime customers that have access to bank credits and are satisfied with the current product',
     btn1:'Relieved',
     color:'aqua',
  },
]
  return (
    <div>
     <Section1 users={users}/>
    </div>
  )
}

export default App

