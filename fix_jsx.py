import re
import sys

def fix_jsx(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Fix preserveaspectratio
    content = content.replace('preserveaspectratio=', 'preserveAspectRatio=')
    
    # Fix viewBox
    content = content.replace('viewbox=', 'viewBox=')
    
    # Fix onsubmit="event.preventDefault()"
    content = content.replace('onsubmit="event.preventDefault()"', 'onSubmit={(e) => e.preventDefault()}')
    
    # Fix onsubmit in general if others exist
    content = re.sub(r'onsubmit="([^"]+)"', r'onSubmit={() => { \1 }}', content)
    
    # Fix required="true" -> required={true}
    content = content.replace('required="true"', 'required={true}')
    content = content.replace('required="required"', 'required={true}')
    
    # Fix tabindex="0" -> tabIndex={0}
    content = content.replace('tabindex="0"', 'tabIndex={0}')
    content = content.replace('tabindex=', 'tabIndex=')
    
    # Fix autocomplete -> autoComplete
    content = content.replace('autocomplete=', 'autoComplete=')
    
    # Fix stroke-width -> strokeWidth
    content = content.replace('stroke-width=', 'strokeWidth=')
    
    # Fix stroke-linecap -> strokeLinecap
    content = content.replace('stroke-linecap=', 'strokeLinecap=')
    
    # Fix stroke-linejoin -> strokeLinejoin
    content = content.replace('stroke-linejoin=', 'strokeLinejoin=')
    
    # Fix fill-rule -> fillRule
    content = content.replace('fill-rule=', 'fillRule=')
    
    # Fix clip-rule -> clipRule
    content = content.replace('clip-rule=', 'clipRule=')

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

def main():
    files = [
        '/Users/akashrana/Desktop/MCA/yoga/kalap-gram-website/src/app/[locale]/page.tsx',
        '/Users/akashrana/Desktop/MCA/yoga/kalap-gram-website/src/components/Navbar.tsx',
        '/Users/akashrana/Desktop/MCA/yoga/kalap-gram-website/src/components/Footer.tsx'
    ]
    for f in files:
        fix_jsx(f)
    print("Fixed JSX attributes.")

if __name__ == '__main__':
    main()
