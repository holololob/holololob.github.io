// main.js
async function loadComponent(containerId, filePath) {
  const container = document.getElementById(containerId);
  // 컨테이너 ID로 요소 선택
  if (container) {
    try {
      const response = await fetch(filePath);
      // 파일 경로로 HTML 컴포넌트 요청
      if (response.ok) {
        const content = await response.text();
        // 응답을 텍스트로 변환
        container.innerHTML = content;
        // 컨테이너에 HTML 삽입
      } else {
        console.error(`Failed to load ${filePath}: ${response.status}`);
      }
    } catch (error) {
      console.error(`Error loading ${filePath}:`, error);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // 각 컴포넌트를 해당 위치에 로드
  loadComponent("header", "./components/header.html");
  loadComponent("banner", "./components/banner.html");
  loadComponent("story-section", "./components/story-section.html");
  loadComponent("service-section", "./components/service-section.html");
  loadComponent("news-section", "./components/news-section.html");
  loadComponent("responsible-section", "./components/responsible-section.html");
  loadComponent("help-section", "./components/help-section.html");
  loadComponent("footer", "./components/footer.html");
});
