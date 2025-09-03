export const getRandomBG = ()=>{
    const colors = [
        "#f6b100",
        "#025cca",
        "#be3e3f",
        "#02ca3a"
    ]
    const color = colors[Math.floor(Math.random() * colors.length)]
    return "bg-["+color+"]";
}



export const getAvatarName = (name)=>{
    if(!name) return "";

    return name.split(" ").map(word => word[0]).join("").toUpperCase();
}


export const formatDate = (date) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return `${months[date.getMonth()]} ${String(date.getDate()).padStart(2, '0')}, ${date.getFullYear()}`;
  };
