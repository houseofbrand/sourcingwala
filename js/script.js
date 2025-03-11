document.addEventListener("DOMContentLoaded", () => {
    // Ordering guidelines for categories that have subcategories
    const orderingGuidelines = {
      sunglasses: "For sunglasses, please ensure you specify the lens type and frame color. Orders must be placed by 10 AM local time.",
      watches: "For watches, please note that warranty details are included in the PDF. Verify model specifications before ordering.",
      lingerie: "For lingerie, please check our size guide and color availability. Orders are subject to stock confirmation.",
      accessorygiftset: "For accessory gift sets, please note minimum order quantities apply.",
      watchgiftset: "For watch gift sets, please verify packaging requirements before ordering."
    };
  
    const categoryElements = document.querySelectorAll('.category');
    
    categoryElements.forEach(category => {
      category.addEventListener('click', function () {
        const cat = this.getAttribute('data-category');
        let subcategories = [];
        
        // Define subcategories based on actual PDF structure with correct case
        if (cat === 'sunglasses') {
          subcategories = ['Kids Sunglass', 'Unisex Sunglasses'];
          cat = 'Sunglasses'; // Correct case for folder name
        } else if (cat === 'watches') {
          subcategories = ['Kids Watches', 'Men Watches', 'Women Watches'];
          cat = 'Watches'; // Correct case for folder name
        } else if (cat === 'lingerie') {
          subcategories = ['Baby Doll', 'Baby Doll Dress', 'Babydoll with Robe', 'Co-Ord Set Babydoll', 'Honey Moon Dress', 'Lingerie & Bikni Set', 'Premium Baby Doll'];
          cat = 'Lingerie'; // Correct case for folder name
        } else if (cat === 'accessorygiftset') {
          subcategories = ['Men Belt Wallet Set'];
          cat = 'AccessoryGiftSet'; // Correct case for folder name
        } else if (cat === 'watchgiftset') {
          subcategories = ['Men', 'Women'];
          cat = 'WatchGiftSet'; // Correct case for folder name
        }
        
        // For categories with only one subcategory, open PDF directly
        if (subcategories.length === 1) {
          const pdfUrl = `https://github.com/houseofbrands/hobwholesale/raw/main/assets/Pdfs/${cat}/${encodeURIComponent(subcategories[0])}.pdf`;
          window.open(pdfUrl, '_blank');
          return;
        }
        
        // Build the subcategories overlay with ordering guidelines and heading
        const subCatContainer = document.querySelector('#subcategories .subcategories-content');
        const guidelinesText = orderingGuidelines[cat] || "";
        subCatContainer.innerHTML = `<h2>Catalogue PDF Download</h2>
          <p class="ordering-guidelines">${guidelinesText}</p>
          <h3>Select your option:</h3>`;
        
        // Create subcategory buttons
        subcategories.forEach(sub => {
          const btn = document.createElement('button');
          btn.textContent = sub;
          btn.classList.add('sub-btn');
          btn.addEventListener('click', function () {
            const pdfUrl = `https://github.com/houseofbrands/hobwholesale/raw/main/assets/Pdfs/${cat}/${encodeURIComponent(sub)}.pdf`;
            window.open(pdfUrl, '_blank');
          });
          subCatContainer.appendChild(btn);
        });
        
        document.getElementById('subcategories').classList.remove('hidden');
      });
    });
    
    // Close the subcategories overlay
    document.getElementById('closeSubcategories').addEventListener('click', function () {
      document.getElementById('subcategories').classList.add('hidden');
    });
});
  