function formatDate(date: string): string {
    const now = new Date();
    const createdAt = new Date(date);
    const diffInSeconds = Math.floor((now.getTime() - createdAt.getTime()) / 1000);
  
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
      return `${diffInMinutes}m`;
    }
  
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
      return `${diffInHours}j`;
    }
  
    const isSameYear = now.getFullYear() === createdAt.getFullYear();
    
    const day = createdAt.getDate().toString().padStart(2, '0');
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
    const month = monthNames[createdAt.getMonth()];
  
    if (isSameYear) {
      return `${day} ${month}`;
    } else {
      const year = createdAt.getFullYear();
      return `${day} ${month} ${year}`;
    }
  }
  
  export default formatDate;
  