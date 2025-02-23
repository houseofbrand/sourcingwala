document.addEventListener("DOMContentLoaded", () => {
    const categoryElements = document.querySelectorAll('.category');
    
    categoryElements.forEach(category => {
      category.addEventListener('click', function () {
        const cat = this.getAttribute('data-category');
        let subcategories = [];
        
        // Define subcategories if applicable
        if (cat === 'sunglasses' || cat === 'watches' || cat === 'watchgiftset') {
          subcategories = ['Men', 'Women', 'Kids'];
        } else if (cat === 'lingerie') {
          subcategories = ['Babydoll', 'Lingerie Set', 'Pack of 3 Panties', 'Co-Ord Set'];
        } else if (cat === 'accessorygiftset') {
          // Open PDF directly for categories without subcategories
          window.open('assets/pdfs/' + cat + '.pdf', '_blank');
          return;
        }
        
        // Build subcategories overlay
        const subCatContainer = document.querySelector('#subcategories .subcategories-content');
        subCatContainer.innerHTML = '';
        
        subcategories.forEach(sub => {
          const btn = document.createElement('button');
          btn.textContent = sub;
          btn.classList.add('sub-btn');
          btn.addEventListener('click', function () {
            // Construct PDF URL (e.g., sunglasses-men.pdf)
            const pdfUrl = 'assets/pdfs/' + cat + '-' + sub.toLowerCase().replace(/\s/g, '') + '.pdf';
            window.open(pdfUrl, '_blank');
          });
          subCatContainer.appendChild(btn);
        });
        
        document.getElementById('subcategories').classList.remove('hidden');
      });
    });
    
    // Close the subcategories overlay when the close button is clicked
    document.getElementById('closeSubcategories').addEventListener('click', function () {
      document.getElementById('subcategories').classList.add('hidden');
    });
  });
  