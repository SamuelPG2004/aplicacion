
document.getElementById("goalForm").addEventListener("submit", function (event) {
    event.preventDefault(); 
  
   
    const teamName = document.getElementById("team").value;
    const matches = parseInt(document.getElementById("matches").value);
    const goals = document.getElementById("goals").value.split(",").map(Number);
  
    if (goals.length !== matches) {
      alert("El número de goles no coincide con el número de partidos. Por favor, revisa los datos.");
      return; 
    }
  
    
    const totalGoals = goals.reduce((sum, goal) => sum + goal, 0); 
    const averageGoals = totalGoals / matches; 
  
    
    document.getElementById("results").innerHTML = `
      <p><strong>Equipo:</strong> ${teamName}</p>
      <p><strong>Total de partidos:</strong> ${matches}</p>
      <p><strong>Total de goles:</strong> ${totalGoals}</p>
      <p><strong>Promedio de goles por partido:</strong> ${averageGoals.toFixed(2)}</p>
    `;
  });
  
  