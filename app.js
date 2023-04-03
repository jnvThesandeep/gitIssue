//next button
/////////////////////////////////////////////////////////////////////
let currentPage = 1;

document.getElementById('load_next').addEventListener('click', () => {
  currentPage++;
  const url = `https://api.github.com/repositories/1296269/issues?page=${currentPage}&per_page=5`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      const issuesList = document.getElementById('issues_list');
      issuesList.innerHTML = ''; 

      data.forEach(issues => {
        const issueName = issues.title;
        const issueItem = document.createElement('li');
        issueItem.textContent = issueName;
        issuesList.appendChild(issueItem);
      });

      document.getElementById('page_heading').textContent = `Page number ${currentPage}`;
    })
    .catch(error => {
      console.error(error);
      currentPage--; 
    });
});
/////////////////////////////////////previous button
///////////////////////////////////////////////////////
document.getElementById('load_prev').addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      const url = `https://api.github.com/repositories/1296269/issues?page=${currentPage}&per_page=5`;
  
      fetch(url)
        .then(res => res.json())
        .then(data => {
          const issuesList = document.getElementById('issues_list');
          issuesList.innerHTML = ''; 
  
          data.forEach(issues => {
            const issueName = issues.title;
            const issueItem = document.createElement('li');
            issueItem.textContent = issueName;
            issuesList.appendChild(issueItem);
          });
  
          document.getElementById('page_heading').textContent = `Page number ${currentPage}`;
        })
        .catch(error => console.error(error));
    }
  });
  
