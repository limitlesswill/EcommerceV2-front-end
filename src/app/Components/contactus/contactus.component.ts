import { Component, ElementRef } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'contactus',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
  constructor(private sanitizer: DomSanitizer, private elementRef: ElementRef) { }
  sanitize(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  scrollTo(section: string): void {
    const element = this.elementRef.nativeElement.querySelector('#' + section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    }
  }


  cairo = [
    {
      title: 'مصر الجديدة',
      content: `<table style="height:200px;">
                  <tbody>
                    <tr>
                      <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">الكوربة</span></strong><br>
                      <span style="color:#0486ba; font-size:14px"><strong>10 شارع ابراهيم - امام ارابياتا الشبراوي </strong></span><br>
                      <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
                      <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">هارون</span></strong><br>
                      <span style="color:#0486ba; font-size:14px"><strong>1 شارع عمر بن الخطاب - بجوار مدرسة سيدة اللويزة</strong></span><br>
                      <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
                    </tr>
                    <tr>
                      <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">تريومف</span></strong><br>
                      <span style="color:#0486ba; font-size:14px"><strong>تريومف 58 شارع محمد رمزي - اول شارع عثمان بن عفان - بجوار البنك الاهلي</strong></span><br>
                      <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
                      <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">صلاح الدين</span></strong><br>
                      <span style="color:#0486ba; font-size:14px"><strong>2 شارع شبين - ميدان صلاح الدين - نهاية سور مستشفى العاصمة</strong></span><br>
                      <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
                    </tr>
                    <tr>
                      <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">الحجاز</span></strong><br>
                      <span style="color:#0486ba; font-size:14px"><strong>204 شارع النزهة ، مصر الجديدة ، أول كوبري الحجاز</strong></span><br>
                      <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
                      <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">رويال هاوس</span></strong><br>
                      <span style="color:#0486ba; font-size:14px"><strong>4 شارع الاثري محمد بن نافح امام حديقة الميريلاند</strong></span><br>
                      <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
                    </tr>
                  </tbody>
                </table>`
    },
    {
      title: 'مدينة نصر', content: `<table style="height:200px;">
    <tbody>
      <tr>
        <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">أحمد فخرى</span></strong><br>
        <span style="color:#0486ba; font-size:14px"><strong>26 شارع أحمد فخري بجوار مستشفي حسبو الدولي </strong></span><br>
        <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
        <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">مكرم عبيد</span></strong><br>
        <span style="color:#0486ba; font-size:14px"><strong>90 شارع مكرم عبيد - بجوار لابوار و بينوس كافيه - من شارع النصر</strong></span><br>
        <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
      </tr>
      <tr>
        <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">عباس العقاد</span></strong><br>
        <span style="color:#0486ba; font-size:14px"><strong>تقاطع شارع مصطفى حمام بجوار مطعم ابو العز السورى</strong></span><br>
        <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
        <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">عباس العقاد 2</span></strong><br>
        <span style="color:#0486ba; font-size:14px"><strong>15 ش عباس العقاد الرئيسي أمام عبد الرحيم قويدر واديداس</strong></span><br>
        <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
      </tr>
      <tr>
        <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">سيتى ستارز مول</span></strong><br>
        <span style="color:#0486ba; font-size:14px"><strong>سيتي ستارز - الطابق 1- مدينة نصر</strong></span><br>
        <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
        <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">سيتى سنتر مكرم</span></strong><br>
        <span style="color:#0486ba; font-size:14px"><strong>سيتى سنتر مكرم عبيد - الدور الثانى - مدينة نصر</strong></span><br>
        <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
      </tr>
        <tr><td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">جاردينيا سيتى ووك</span></strong><br>
        <span style="color:#0486ba; font-size:14px"><strong>مول جاردينيا سيتى ووك الدور الأرضى بجوار بنك مصر و البنك الاهلى </strong></span><br>
        <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
    </tr></tbody>
  </table>` },
    {
      title: 'جسر السويس', content: `<table style="height:200px;">
    <tbody>
      <tr>
        <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">ألف مسكن</span></strong><br>
        <span style="color:#0486ba; font-size:14px"><strong>112 ميدان الف مسكن - امام موقف رابعة - جسر السويس </strong></span><br>
        <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
        <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">الحرفيين</span></strong><br>
        <span style="color:#0486ba; font-size:14px"><strong>238 شارع جمال عبد الناصر - جسر السويس - بجوار فرع فودافون</strong></span><br>
        <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
      </tr>
      <tr>
        <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">حديقة بدر</span></strong><br>
        <span style="color:#0486ba; font-size:14px"><strong>113 شارع العشرين - خلف حديقة بدر - بجوار مسجد الوطنية</strong></span><br>
        <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
      </tr>
      <tr>
      </tr>
    </tbody>
  </table>` },
    {
      title: "عين شمس",
      content: `<table style="height:200px;">
      <tbody>
        <tr>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">العشرين</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>1 ش العشرين - نهاية شارع العشرين متفرع من احمد عصمت </strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">مصطفى حافظ ( العرب ) 1</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>6 شارع مصطفى حافظ (العرب) - أمام التوحيد والنور</strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
        </tr>
        <tr>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">مصطفى حافظ ( العرب ) 2</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>33 شارع مصطفى حافظ (بلونة) - جسر السويس</strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
        </tr>
        <tr>
        </tr>
      </tbody>
    </table>`
    },
    {
      title: "العبور",
      content: `<table style="height:200px;">
      <tbody>
        <tr>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">جولف سيتى مول 1</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>رقم 116 في جولف سيتي مول - الدور الثالث - مدينة العبور </strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">جولف سيتى مول 2</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>جولف سيتي مول - الدور الأرضى - مدينة العبور</strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
        </tr>
        <tr>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">نادى العبور الرياضى</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>سور نادي العبور - بجوار جهاز مدينة العبور</strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
        </tr>
        <tr>
        </tr>
      </tbody>
    </table>`
    },
    {
      title: "المقطم",
      content: `<table style="height:200px;">
      <tbody>
        <tr>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">المقطم</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>8 شارع 9 - ميدان النافورة - بجوار سبينس ماركت </strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
        </tr>
        <tr>
        </tr>
      </tbody>
    </table>`
    },
    {
      title: "المطرية",
      content: `<table style="height:200px;">
      <tbody>
        <tr>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">المطرية</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>ميدان المطريه بنزينه شيل أوت الجديده</strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
        </tr>
        <tr>
        </tr>
      </tbody>
    </table>`
    },
    {
      title: "شبرا",
      content: `<table style="height:200px;">
      <tbody>
        <tr>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">شبرا</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>68 شارع شبرا - بعد النساجون الشرقيون - بجوار لابوار </strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">دوران شبرا</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>دوران شبرا بالقرب من محطة روض الفرج</strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
        </tr>
        <tr>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">شبرا الخيمة</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>شارع 15 مايو - كوبري عرابى - بجوار كشرى الخديوى</strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
        </tr>
        <tr>
        </tr>
      </tbody>
    </table>`
    },
    {
      title: "المعادى",
      content: `<table style="height:200px;">
      <tbody>
        <tr>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">المعادى</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>المعادى 32 شارع 9 </strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">زهراء المعادى</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>Hub50 Mall شارع الخمسين زهراء المعادي</strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
        </tr>
        <tr>
        </tr>
      </tbody>
    </table>`
    },
    {
      title: "التجمع و الرحاب",
      content: `<table style="height:200px;">
      <tbody>
        <tr>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">التجمع الخامس - جلاكسى مول</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>شارع التسعين جلاكسي مول بجوار اتصالات </strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">التجمع الثالث - أرابيلا بلازا</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>مدخل 8، أمام شارع جمال عبد الناصر- بجوار مطعم Bonni Caffe</strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
        </tr>
        <tr>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">التجمع الأول - الميراج مول</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>محور مصطفى كامل - بجوار المدرسة الإنجليزية - طريق السويس</strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">الرحاب</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>رقم 310 منطقة الخدمات - بوابة 6 السوق القديم خلف جهاز مدينة الرحاب</strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
        </tr>
        <tr>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">مدينتى</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>البوابه التانيه - Open air mall - مدينتي</strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">سفن ستارز مول</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>سفن ستار مول بجوار محكمة القاهرة الجديدة</strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
        </tr>
      </tbody>
    </table>`
    },
    {
      title: "وسط البلد",
      content: `<table style="height:200px;">
      <tbody>
        <tr>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">وسط البلد</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>38 شارع شريف باشا متفرع من شارع عدلي - بجوار المقاولون العرب </strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">الظاهر</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>تكنو بوينت مول - بجانب فودافون - امام مسجد القويسني - ميدان الظاهر</strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
        </tr>
        <tr>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">المنيل</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>123 شارع عبد العزيز آل سعود ، المنيل ، القاهرة القديمة</strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
        </tr>
        <tr>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">ممشى أهل مصر</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>كورنيش النيل أمام البنك الاهلى و بنك مصر فرع النيل</strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">عابدين</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>شارع الشيخ ريحان بجوار مكتب بريد عابدين</strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
        </tr>
      </tbody>
    </table>`
    },
    {
      title: "السلام",
      content: `<table style="height:200px;">
      <tbody>
        <tr>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">تاون سنتر مول</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong> أمام محطة مترو عدلي منصور بجوار كارفور</strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
        </tr>
        <tr>
        </tr>
      </tbody>
    </table>`
    },
    {
      title: "حدائق القبة",
      content: `<table style="height:200px;">
      <tbody>
        <tr>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">حدائق القبة</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>السراي مول - حدائق القبة </strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">سراي القبة</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>شارع سراي القبة - بجوار سنترال القبة وحديقة الطاهرة</strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
        </tr>
        <tr>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">سراي القبة - اوت ليت</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>شارع سراي القبة - بجوار سنترال القبة وحديقة الطاهرة</strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
        </tr>
        <tr>
        </tr>
      </tbody>
    </table>`
    },
    {
      title: "حلوان",
      content: `<table style="height:200px;">
	<tbody>
		<tr>
			<td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">حلوان</span></strong><br>
			<span style="color:#0486ba; font-size:14px"><strong>30 شارع محمد سيد - بجوار مدرسة الياس للغات</strong></span><br>
			<a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
		</tr>
		<tr>
		</tr>
	</tbody>
</table>`
    }
  ];

  giza = [
    {
      title: "6 أكتوبر",
      content: `<table style="height:200px;">
      <tbody>
        <tr>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">الحصرى - 6 أكتوبر</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>ساحة الحصري أمام مسجد الحصري </strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">مول العرب</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>مول العرب بوابة 23 مدخل 1</strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
        </tr>
        <tr>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">مول مصر</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>مول مصر الدور الثاني, بالقرب من موقف سيارات C2 L2</strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">هايبر وان - الشيخ زايد</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>الدور الاول هايبر وان - الشيخ زايد - المحور المركزي - ٦ اكتوبر</strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
        </tr>
        <tr>
        </tr>
      </tbody>
    </table>`
    },
    {
      title: "حدائق الأهرام",
      content: `<table style="height:200px;">
      <tbody>
        <tr>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">أهرام مول</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>البوابة التانية الجديدة (أحمس) أمام نادي حدائق الأهرام بجوار البوابة الأولى</strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
        </tr>
        <tr>
        </tr>
      </tbody>
    </table>`
    },
    {
      title: "الهرم",
      content: `<table style="height:200px;">
      <tbody>
        <tr>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">مشعل</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>32 عمارات بيراميدز محطة مشعل - الهرم </strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">الهرم</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>300 شارع الهرم - أمام محطة بنزين توتال - الطالبية</strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
        </tr>
        <tr>
        </tr>
      </tbody>
    </table>`
    },
    {
      title: "فيصل",
      content: `<table style="height:200px;">
      <tbody>
        <tr>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">فيصل</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>146 ش الملك فيصل الكوم الأخضر بجوار بنك كريدي أجريكول </strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">فيصل 2</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>368 ش فيصل العمومي أمام مطعم ليالي العمر</strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
        </tr>
        <tr>
        </tr>
      </tbody>
    </table>`
    },
    {
      title: "المهندسين",
      content: `<table style="height:200px;">
      <tbody>
        <tr>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">المهندسين</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>39 شارع احمد عرابي - بجوار عمارة مرتضى منصور - امام عمر افندي </strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">شهاب</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>3 - شارع شهاب أمام جاد وبالقرب من البنك الأهلي القطرى - متفرع من شارع جامعة الدول العربية</strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
        </tr>
        <tr>
        </tr>
      </tbody>
    </table>`
    },
    {
      title: "الدقى",
      content: `<table style="height:200px;">
      <tbody>
        <tr>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">مصدق</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>62 شارع مصدق - بجوار بيتزا هات</strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
        </tr>
        <tr>
        </tr>
      </tbody>
    </table>`
    },
    {
      title: "امبابة",
      content: `<table style="height:200px;">
      <tbody>
        <tr>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">امبابة</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>105 شارع الوحدة امبابة</strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
        </tr>
        <tr>
        </tr>
      </tbody>
    </table>`
    },
    {
      title: "بولاق الدكرور",
      content: `<table style="height:200px;">
      <tbody>
        <tr>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">بولاق الدكرور</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>بولاق الدكرور ش ناهيا أمام الحايس</strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
        </tr>
        <tr>
        </tr>
      </tbody>
    </table>`
    }
  ];

  alex = [
    {
      title: "سان ستيفانو",
      content: `<table style="height:200px;">
      <tbody>
        <tr>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">سان ستيفانو</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>مول سان ستيفانو الدور الثاني بجوار السينما</strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
        </tr>
        <tr>
        </tr>
      </tbody>
    </table>`
    },
    {
      title: "سموحة",
      content: `<table style="height:200px;">
      <tbody>
        <tr>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">سموحة</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>34 شارع فوزي معاذ ، سموحه - الأسكندريه</strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
        </tr>
        <tr>
        </tr>
      </tbody>
    </table>`
    },
    {
      title: "ميامى",
      content: `<table style="height:200px;">
      <tbody>
        <tr>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">ميامي</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>57 شارع جمال عبدالناصر ميامي</strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
        </tr>
        <tr>
        </tr>
      </tbody>
    </table>`
    },
    {
      title: "محطة الرمل",
      content: `<table style="height:200px;">
      <tbody>
        <tr>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">محطة الرمل</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>59 شارع سعد زغلول بجوار بنك اسكندريه</strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
        </tr>
        <tr>
        </tr>
      </tbody>
    </table>`
    },
    {
      title: "البيطاش",
      content: `<td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">البيطاش</span></strong><br>
			<span style="color:#0486ba; font-size:14px"><strong>عمارة برج اللؤلؤه 35 شارع البطاش بجوار بنك مصر</strong></span><br>
			<a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>`
    }
  ];

  delta = [
    {
      title: "المنوفية",
      content: `<table style="height:200px;">
      <tbody>
        <tr>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">شبين الكوم</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>شارع الجلاء متفرع من شارع طلعت حرب - شبين الكوم</strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
        </tr>
        <tr>
        </tr>
      </tbody>
    </table>`
    },
    {
      title: "المنصورة",
      content: `<table style="height:200px;">
      <tbody>
        <tr>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">المنصورة</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>اول شارع جيهان امام سيراميك السلاب وبجانب مستشفى السلاب</strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
        </tr>
        <tr>
        </tr>
      </tbody>
    </table>`
    },
    {
      title: "دمنهور",
      content: `<table style="height:200px;">
      <tbody>
        <tr>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">دمنهور</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>شارع عبدالسلام الشاذلي - أمام سينما النصر بجوار ماكدونالدز</strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
        </tr>
        <tr>
        </tr>
      </tbody>
    </table>`
    },
    {
      title: "الزقازيق",
      content: `<table style="height:200px;">
      <tbody>
        <tr>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">الزقازيق</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>شارع طلبه عويضه - بجوار المصريه بلازا امام الرشيدي الجديد</strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
        </tr>
        <tr>
        </tr>
      </tbody>
    </table>`
    },
    {
      title: "طنطا",
      content: `<table style="height:200px;">
      <tbody>
        <tr>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">طنطا</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>مول طنطا - بوابة 3 - بجانب ابو عوف</strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
        </tr>
        <tr>
        </tr>
      </tbody>
    </table>`
    },
    {
      title: "دمياط",
      content: `<table style="height:200px;">
      <tbody>
        <tr>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">دمياط</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>عمارة شنشن بجوار مدرسة ابن خلدون و سوبر ماركت كازيون شارع الجلاء</strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
        </tr>
        <tr>
        </tr>
      </tbody>
    </table>`
    },
    {
      title: "بور سعيد",
      content: `<table style="height:200px;">
      <tbody>
        <tr>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">بور سعيد</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>شارع ٢٣ يوليو Style Square Mall أمام حي المناخ (الساحة الشاطئية)</strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
        </tr>
        <tr>
        </tr>
      </tbody>
    </table>`
    }
  ];

  sa3id = [
    {
      title: "أسيوط",
      content: `<table style="height:200px;">
      <tbody>
        <tr>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">مدينة أسيوط</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>47 شارع الجمهورية -امام فودافون مدينة اسيوط</strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
        </tr>
        <tr>
        </tr>
      </tbody>
    </table>`
    },
    {
      title: "المنيا",
      content: `<table style="height:200px;">
      <tbody>
        <tr>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">المنيا</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>سور نادي المنيا الرياضي شارع طه حسين بجوار مطعم البيت</strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
        </tr>
        <tr>
        </tr>
      </tbody>
    </table>`
    },
    {
      title: "سوهاج",
      content: `<table style="height:200px;">
      <tbody>
        <tr>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">سوهاج</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>65 شارع ال 15 بجوار تاون تيم للملابس</strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
        </tr>
        <tr>
        </tr>
      </tbody>
    </table>`
    },
    {
      title: "الفيوم",
      content: `<table style="height:200px;">
      <tbody>
        <tr>
          <td style="text-align:right; width:345px"><strong><span style="color:#000000; font-size:18px"><img alt="" src="https://newdream2000.s3.amazonaws.com/Backend-developer/placeholder.png" style="height:20px; width:20px">الفيوم</span></strong><br>
          <span style="color:#0486ba; font-size:14px"><strong>مول سيتي بلازا - شارع محمود فهمي - بعد فندق دار الضيافة</strong></span><br>
          <a href="#"><img alt="" src="https://r2media.horizondm.com/wysiwyg/smartwave/homepage/PRODUCTS/backend-developer/Location_Branch.png" style="padding-top:10px; width:145px"></a></td>
        </tr>
        <tr>
        </tr>
      </tbody>
    </table>`
    }
  ];


  indices: { [key: string]: number } = {
    cairo: 0,
    giza: 0,
    alex: 0,
    delta: 0,
    sa3id: 0
  };

  activateTab(area: string, index: number) {
    if (this.indices[area] !== undefined) {
      this.indices[area] = index;
    }
  }
}
