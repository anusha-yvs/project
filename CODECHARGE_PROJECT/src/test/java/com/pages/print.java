package com.pages;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class print {
	WebDriver driver;
	By employees=By.xpath("/html/body/table[2]/tbody/tr/td/table[2]/tbody/tr[1]/td/a");
	By addnewemployee=By.xpath("/html/body/table[2]/tbody/tr/td/table[2]/tbody/tr[27]/td[1]/a");
	By name=By.xpath("/html/body/table[2]/tbody/tr/td/form/table[2]/tbody/tr[1]/td/input");
	By email=By.xpath("/html/body/table[2]/tbody/tr/td/form/table[2]/tbody/tr[2]/td/input");
	By login=By.xpath("/html/body/table[2]/tbody/tr/td/form/table[2]/tbody/tr[3]/td/input");
	By password=By.xpath("/html/body/table[2]/tbody/tr/td/form/table[2]/tbody/tr[4]/td/input");
	By securitylevel=By.xpath("/html/body/table[2]/tbody/tr/td/form/table[2]/tbody/tr[5]/td/select");
	By admin=By.xpath("/html/body/table[2]/tbody/tr/td/form/table[2]/tbody/tr[5]/td/select/option[2]");
	By add=By.xpath("/html/body/table[2]/tbody/tr/td/form/table[2]/tbody/tr[6]/td/input[1]");
	By next=By.xpath("/html/body/table[2]/tbody/tr/td/table[2]/tbody/tr[27]/td[2]/a");
	By Username=By.name("login");
	By Password=By.name("password");
	By Login=By.name("DoLogin");
//To launch the website
		public void abcd(String browser)
		{
			if(browser.equalsIgnoreCase("chrome"))
			{
				System.setProperty("webdriver.chrome.driver","src\\test\\resources\\Drivers\\chromedriver.exe");
				driver=new ChromeDriver();
				}
//To launch firefox Browser
				else if(browser.equalsIgnoreCase("firefox"))
				{
					System.setProperty("webdriver.gecko.driver","src\\test\\resources\\Drivers\\geckodriver.exe");
					driver=new FirefoxDriver();
				}
// To maximize the window
			driver.manage().window().maximize();
			driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
			System.out.println(driver.getTitle());
			driver.get("http://examples.codecharge.com/TaskManager/Login.php?Logout=True");
			driver.findElement(Username).sendKeys("admin");
			driver.findElement(Password).sendKeys("admin");
			driver.findElement(Login).click();
		}
//To click on employees
		public void employees()
		{
			driver.findElement(employees).click();
		}
//To click on addnewemployee
		public void addnewemployee() {
			driver.findElement(addnewemployee).click();
		}
		//To enter the details of employee
		public void details() {
			driver.findElement(name).sendKeys("anusha");
			driver.findElement(email).sendKeys("anusha@gmail.com");
			driver.findElement(login).sendKeys("admin");
			driver.findElement(password).sendKeys("admin");
			driver.findElement(securitylevel).click();
			driver.findElement(admin).click();
		}
//To click on add button
		public void add() {
			driver.findElement(add).click();
		}
//To click on next
		public void next() {
			driver.findElement(next).click();
		}
//To take the screenshot of employee list
		public void Print() throws IOException
		{
			TakesScreenshot ts=((TakesScreenshot)driver);
			File source=ts.getScreenshotAs(OutputType.FILE);
			FileUtils.copyFile(source, new File("src\\test\\resources\\screenshots\\print.PNG"));
		}
}
