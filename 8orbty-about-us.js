document.addEventListener("DOMContentLoaded", () => {
  const langBtn = document.getElementById("nav-lang");
  if (langBtn) {
    langBtn.addEventListener("click", toggleLanguage);
  }
});

let currentLang = "en";

function toggleLanguage() {
  const isArabic = currentLang === "en";
  document.body.dir = isArabic ? "rtl" : "ltr";
  currentLang = isArabic ? "ar" : "en";

  const navItems = [
    ["nav-home", "الرئيسية", "Home"],
    ["nav-housing", "السكن", "Housing"],
    ["nav-food", "الأكل", "Food"],
    ["nav-vr", "جولات VR", "VR Tours"],
    ["nav-todo", "المهام", "To do"],
    ["nav-id", "الهوية", "ID"],
    ["nav-about", "معلومات عنا", "About Us"],
    ["nav-lang", "English", "العربية"],
    ["login", "تسجيل الدخول", "Log in"]
  ];

  navItems.forEach(([id, ar, en]) => {
    const el = document.getElementById(id);
    if (el) el.innerText = isArabic ? ar : en;
  });

  const contentItems = [
    ["community-title", "في غربتي، حسينا بالغربة قبل ما تبدأ", "At Ghorbety, we felt the homesickness before it even started"],
    ["community-p1", "عارفين إحساس الطالب اللي بيسيب بيته ويدخل عالم جديد لوحده", "We understand what it’s like for a student to leave home and step into a new world all alone"],
    ["community-p2", "عشان كده بنينا أول تطبيق ذكي في مصر بيساعد طلاب الجامعة المغتربين", "That’s why we decided to build the first smart app in Egypt dedicated to truly supporting university students living away from home"],
    ["community-p3", "غربتي مش مجرد تطبيق", "Ghorbety isn’t just an app"],
    ["community-p4", "دي مساحة بتجمع كل اللي الطالب محتاجه علشان يعيش ويتعلم وينجح", "It’s a space that brings students everything they need to live, study, and grow"],
    ["community-p5", "من سكن آمن وسعره مناسب", "From safe and affordable student housing"],
    ["community-p6", "لمصادر دراسية موثوقة", "To reliable academic resources"],
    ["community-p7", "ولفرص تدريبية حقيقية", "To real training opportunities that open doors to careers"],
    ["community-p8", "وخدمات يومية بتسهل الحياة", "To everyday services that make life easier"],
    ["community-p9", "لكن المميز فعلاً هو المجتمع الطلابي اللي بيخلقه التطبيق", "But what makes Ghorbety special is the student community it creates"],
    ["community-p10", "اللي فيه ناس بتتكلم", "Where people talk"],
    ["community-p11", "وتساعد بعض", "Support each other"],
    ["community-p12", "ويحسوا إنهم مش لوحدهم", "And feel like they truly belong"],
    ["community-p13", "إحنا مؤمنين إن الغربة مش لازم تبقى وحدة", "We believe that being away from home doesn’t have to feel lonely"],
    ["community-p14", "لما تبقى محاط بناس فاهمينك وواقفين جنبك", "When you’re surrounded by people who understand you and stand by your side"]
  ];

  contentItems.forEach(([id, ar, en]) => {
    const el = document.getElementById(id);
    if (el) el.innerText = isArabic ? ar : en;
  });
}
